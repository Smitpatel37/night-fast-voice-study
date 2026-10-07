import { zipStore } from "@/lib/zip";

export type FinishedCase = {
  caseNumber: number;
  status: "recorded" | "skipped";
  startedAt?: string;
  endedAt?: string;
  durationMs?: number;
  mimeType?: string;
  recording?: Blob;
};

export const EMPTY_RECORDING_MESSAGE = "Nothing recorded yet.";

function extensionFor(mimeType: string) {
  if (mimeType.includes("mp4")) return "mp4";
  if (mimeType.includes("ogg")) return "ogg";
  if (mimeType.includes("wav")) return "wav";
  return "webm";
}

/**
 * Download night-fast-session.zip for the cases finished so far.
 * Every case page calls this function. Unfinished cases are omitted.
 * Returns false when nothing is finished.
 */
export async function downloadNightFastSession(cases: readonly FinishedCase[]) {
  const finished = [...cases].sort((a, b) => a.caseNumber - b.caseNumber);
  if (finished.length === 0) return false;

  const files: { name: string; data: Uint8Array }[] = [];
  const sessionCases = [];

  for (const item of finished) {
    let file: string | undefined;
    if (item.status === "recorded" && item.recording && item.recording.size > 0) {
      file = `case-${item.caseNumber}-recording.${extensionFor(item.mimeType ?? "")}`;
      files.push({
        name: file,
        data: new Uint8Array(await item.recording.arrayBuffer()),
      });
    }

    sessionCases.push({
      caseNumber: item.caseNumber,
      status: item.status,
      ...(item.startedAt ? { startedAt: item.startedAt } : {}),
      ...(item.endedAt ? { endedAt: item.endedAt } : {}),
      ...(item.durationMs != null ? { durationMs: item.durationMs } : {}),
      ...(item.mimeType ? { mimeType: item.mimeType } : {}),
      ...(file ? { file } : {}),
    });
  }

  const session = {
    app: "Night Fast",
    label: "Record a night",
    cases: sessionCases,
  };
  files.push({
    name: "session.json",
    data: new TextEncoder().encode(`${JSON.stringify(session, null, 2)}\n`),
  });

  const archive = zipStore(files);
  const url = URL.createObjectURL(archive);
  const link = document.createElement("a");
  link.href = url;
  link.download = "night-fast-session.zip";
  link.click();
  URL.revokeObjectURL(url);
  return true;
}
