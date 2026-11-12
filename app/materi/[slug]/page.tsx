import { notFound } from "next/navigation";
import { lessons } from "@/lib/data";
import { LessonDetail } from "@/components/lesson-detail";

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = lessons.find((item) => item.id === slug);
  if (!lesson) notFound();
  return <LessonDetail lesson={lesson} />;
}
