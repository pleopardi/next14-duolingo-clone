import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/db/queries";

import { Quiz } from "../quiz";

type Props = {
  params: {
    lessonId: number;
  };
};

const LessonIdPage = async ({
  params,
}: Props) => {
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();

  const [
    lesson,
    userProgress,
  ] = await Promise.all([
    lessonData,
    userProgressData
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage = lesson.challenges
    .filter((challenge) => challenge.completed)
    .length / lesson.challenges.length * 100;

  return ( 
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={null} // TODO: Add user subscription
    />
  );
};
 
export default LessonIdPage;
