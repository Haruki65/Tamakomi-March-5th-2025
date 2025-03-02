"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const activityData: Record<string, { title: string; content: string; image?: string }> = {
    "1": {
        title: "Things that have inspired you",
        content: "Share things that have influenced you and why. How have they changed you? They could be anything--books, movies, persons, etc."
    },
    "2": {
        title: "Shaking things up for a fair shake.",
        content: `Look at these four scenarios and consider:\n\n
      - What seems fair or unfair here?\n
      - Which scenario seems most fair to you?\n
      - Why do you think the fences are there? Do you think they are necessary?\n
      - Think about this for other resources people might have unequal access to, such as parks, education, healthcare.\n\n
      The terms equality, equity, and justice are related, but are not the same.\n
      **Equality**: Everyone receives the same resources or opportunities, regardless of their individual circumstances.\n\n
      **Equity**: Resources and opportunities are distributed based on individual needs to create fair outcomes.\n\n
      **Justice**: Systemic barriers are removed so that equity is no longer needed because fairness is built into the system itself.`,
        image: "/fairness.jpg" // 画像パス追加
    },
    "3": {
        title: "What do you want to learn next?",
        content: "Share things you are curious about and want to explore further. It's a great topic to discuss for the rest of your spring vacation and beyond."
    }
};

export default function ActivityPage() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const activity = id ? activityData[id] : undefined;

    if (!activity) {
        return <p className="text-center text-2xl font-bold mt-10">Activity not found</p>;
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
                    {activity.title}
                </h1>

                {/* 画像の追加 */}
                {activity.image && (
                    <div className="w-full max-w-lg">
                        <Image
                            src={activity.image}
                            alt="Illustration of fairness, equity, and justice"
                            width={800}
                            height={450}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <div className="text-lg text-center sm:text-left max-w-2xl whitespace-pre-line">
                    {activity.content}
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/">
                    <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
                    Back to Home
                </a>
            </footer>
        </div>
    );
}
