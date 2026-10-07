"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CASE_COUNT } from "@/lib/cases";
import {
  downloadNightFastSession,
  EMPTY_RECORDING_MESSAGE,
  type FinishedCase,
} from "@/lib/download-session";

export function RecordScreen() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "recording">("idle");
  const [notice, setNotice] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startedAtRef = useRef<number | null>(null);
  const finishedRef = useRef<FinishedCase[]>([]);

  const caseNumber = caseIndex + 1;
  const isLastCase = caseNumber === CASE_COUNT;

  function stopTracks() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }

  function finishCase(entry: FinishedCase) {
    const next = finishedRef.current.filter((item) => item.caseNumber !== entry.caseNumber);
    next.push(entry);
    next.sort((a, b) => a.caseNumber - b.caseNumber);
    finishedRef.current = next;
    setPhase("idle");
    setNotice(null);
    setCaseIndex((index) => (index + 1 < CASE_COUNT ? index + 1 : index));
  }

  async function toggleRecording() {
    const active = recorderRef.current;
    if (active && active.state === "recording") {
      active.stop();
      return;
    }

    setNotice(null);
    const recordingCase = caseNumber;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const preferred = ["audio/webm", "audio/mp4", "audio/ogg"].find((type) =>
        MediaRecorder.isTypeSupported(type),
      );
      const recorder = new MediaRecorder(
        stream,
        preferred ? { mimeType: preferred } : undefined,
      );
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const mimeType = recorder.mimeType || preferred || "audio/webm";
        const started = startedAtRef.current ?? Date.now();
        const ended = Date.now();
        stopTracks();
        recorderRef.current = null;
        const blob = new Blob(chunksRef.current, { type: mimeType });
        finishCase({
          caseNumber: recordingCase,
          status: "recorded",
          startedAt: new Date(started).toISOString(),
          endedAt: new Date(ended).toISOString(),
          durationMs: ended - started,
          mimeType,
          recording: blob,
        });
      };
      startedAtRef.current = Date.now();
      recorderRef.current = recorder;
      recorder.start();
      setPhase("recording");
    } catch {
      setNotice("Microphone is unavailable.");
    }
  }

  function skip() {
    const active = recorderRef.current;
    const skippedCase = caseNumber;
    if (active && active.state === "recording") {
      active.onstop = () => {
        stopTracks();
        recorderRef.current = null;
        chunksRef.current = [];
        finishCase({ caseNumber: skippedCase, status: "skipped" });
      };
      active.stop();
      return;
    }
    finishCase({ caseNumber: skippedCase, status: "skipped" });
  }

  async function downloadZip() {
    const saved = await downloadNightFastSession(finishedRef.current);
    setNotice(saved ? null : EMPTY_RECORDING_MESSAGE);
  }

  return (
    <main className="min-h-dvh bg-[#1b1f2d] p-3 sm:p-4">
      <section
        className="flex min-h-[calc(100dvh-1.5rem)] flex-col bg-[#0e1116] px-4 pb-6 pt-8 sm:min-h-[calc(100dvh-2rem)] sm:px-6"
        data-case={caseNumber}
        data-last-case={isLastCase ? "true" : "false"}
      >
        <header>
          <h1 className="flex items-center gap-2 text-base font-medium text-slate-100">
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
            Night Fast
          </h1>
          <p className="mt-1 text-sm text-[#677489]">Record a night</p>
          <p className="mt-1 text-sm text-slate-100">Case {caseNumber}</p>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-5 py-10">
          <button
            type="button"
            onClick={toggleRecording}
            aria-pressed={phase === "recording"}
            aria-label={phase === "recording" ? "Stop recording" : "Start recording"}
            className={`size-20 rounded-full bg-[#e77975] shadow-[0_0_0_10px_rgba(231,121,117,0.16)] transition hover:brightness-110 active:scale-95 ${
              phase === "recording" ? "animate-pulse" : ""
            }`}
          />
          <p className="text-sm text-[#677489]">
            {phase === "recording" ? "Recording… tap again to stop" : "Tap red button to record"}
          </p>
        </div>

        <div className="flex flex-nowrap items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={skip}
            className="h-10 border-[#3c4458] bg-transparent px-4 text-[#73818f] hover:bg-white/5 hover:text-[#73818f]"
          >
            Skip
          </Button>
          <Button
            size="lg"
            onClick={downloadZip}
            className="h-10 bg-green-600 px-4 text-white hover:bg-green-500"
          >
            Download Zip
          </Button>
        </div>
        <p className="mt-3 min-h-5 text-sm text-[#677489]" role="status">
          {notice}
        </p>
      </section>
    </main>
  );
}
