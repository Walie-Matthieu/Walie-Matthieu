import Image from "next/image";
import { FC, ReactNode } from "react";

interface ProjectBoxProps {
  title: string;
  image: string;
  color: string;
  Content: FC;
}

const ProjectBox: FC<ProjectBoxProps> = ({ title, image, color, Content }) => {
  return (
    <div
      className="relative bg-white shadow-lg rounded-lg p-6 text-center border-2"
      style={{ borderColor: color }}
    >
      {/* Logo Container */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-12 border-2 rounded-full bg-white flex items-center justify-center shadow-md`}
        style={{
          width: 96,
          height: 96,
          borderColor: color,
        }}
      >
        <Image src={image} alt={`${title} logo`} width={72} height={72} />
      </div>

      {/* Box Content */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold" style={{ color }}>
          {title}
        </h3>
        <Content />
      </div>
    </div>
  );
};

export default ProjectBox;
