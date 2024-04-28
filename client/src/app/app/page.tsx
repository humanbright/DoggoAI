import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const STORIES = [
    {
        id: 1,
        title: "Cows in the field",
        tags: ["wallah", "inshallah"],
        link: "k3v.in",
    },
    {
        id: 2,
        title: "Cows in the field",
        tags: ["wallah", "inshallah"],
        link: "k3v.in",
    },
    {
        id: 3,
        title: "Cows in the field",
        tags: ["wallah", "inshallah"],
        link: "k3v.in",
    },
    {
        id: 4,
        title: "Cows in the field",
        tags: ["wallah", "inshallah"],
        link: "k3v.in",
    },
    {
        id: 5,
        title: "Cows in the field",
        tags: ["wallah", "inshallah"],
        link: "k3v.in",
    },
];

const EMOTIONS = [
    {
        emotion: "joy",
        value: 86,
    },
    {
        emotion: "concentration",
        value: 76,
    },
    {
        emotion: "confusion",
        value: 12,
    },
];

const Page = () => {
    return (
        <div className="w-full overflow-auto pl-16 pr-8 pt-10">
            <div className="space-y-2">
                <h1 className="text-5xl font-bold">Welcome back, Jasmine</h1>
                <h2 className="text-2xl font-semibold text-gray-400">
                    You have 2 stories waiting for you!
                </h2>
            </div>

            <div className="flex flex-row space-x-12 pt-8">
                {/* Contains all elements */}
                <div className="max-h-fit w-full space-y-4">
                    {/* Contains non-statistical */}
                    <div className="flex-between rounded-lg border-4 border-dashed border-gray-400 bg-gray-400 bg-clip-padding p-6">
                        <div className="flex h-full flex-col justify-between space-y-12 pt-4">
                            <h3 className="text-4xl font-bold">
                                Create a new story!
                            </h3>

                            <HoverBorderGradient
                                className="flex-center w-60 space-x-2 py-4 text-2xl"
                                duration={0.1}
                            >
                                <Sparkles /> <p>make magic</p>
                            </HoverBorderGradient>
                        </div>
                        <img src="/bear.svg" />
                    </div>

                    <div className="space-y-2 rounded-xl bg-gray-100 p-6">
                        <h4 className="px-2 text-2xl font-bold">
                            Your Stories
                        </h4>
                        <HoverEffect items={STORIES} className="py-0" />
                    </div>

                    <div className="space-y-2 rounded-xl bg-gray-100 p-6">
                        <h4 className="px-2 text-2xl font-bold">Your Words</h4>
                        <HoverEffect items={STORIES} className="py-0" />
                    </div>
                </div>

                <div className="w-[450px] min-w-[450px] space-y-4">
                    {/*Contains statistical */}
                    <div className="max-w-[85%] space-y-3 rounded-xl bg-gray-100 p-6">
                        <div className="w-fit rounded-full bg-gray-200 px-3 py-1">
                            Learning style
                        </div>

                        <div>
                            <p className="text-xl font-semibold text-gray-400">
                                You are a
                            </p>
                            <p className="text-3xl font-bold">
                                whimsical learner
                            </p>
                        </div>
                        <div>
                            <p>
                                You are creative and love to expand on details
                                in the stories through unique twists and turns!
                            </p>
                        </div>
                        <div className="h-52 bg-gray-300"></div>
                    </div>

                    <div className="max-w-[85%] space-y-6 rounded-xl bg-gray-100 p-6">
                        <div className="text-3xl font-bold">
                            Emotional Health
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <p className="text-lg font-semibold">
                                    Distribution
                                </p>
                                <div className="space-y-2">
                                    {EMOTIONS.map((item) => (
                                        <div className="space-y-1">
                                            <div className="flex-between w-full">
                                                <p className="text-sm font-semibold">
                                                    {item.emotion}
                                                </p>
                                                <p className="text-sm font-semibold opacity-40">
                                                    {item.value}%
                                                </p>
                                            </div>
                                            <Progress
                                                value={item.value}
                                                className="h-6 bg-gray-400"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-lg font-semibold">
                                    Attention
                                </p>

                                <div className="flex-center h-[350px] rounded-xl bg-gray-400">
                                    chart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;