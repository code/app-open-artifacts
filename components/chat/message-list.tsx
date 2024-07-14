import { Models } from "@/app/types";
import { ChatMessage } from "@/components/chat/message";
import { Message } from "ai";

const generateMessages = (count: number) => {
  return Array.from({ length: count }).map((_, index) => ({
    role: index % 2 === 0 ? "user" : "ai",
    model: index % 2 === 0 ? null : Models.claude,
    text: "Hello whats up",
  }));
};

type Props = {
  messages: Message[];
};

export const ChatMessageList = ({ messages }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-3 px-4 max-w-3xl mx-auto w-full pt-1">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          model={Models.claude}
          text={message.content}
        />
      ))}
    </div>
  );
};