import Image from "next/image";
import { CSSProperties, FC, useState } from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";
import projectData, { ProjectContentProps } from "../projects/projectData";

interface ProjectBoxProps {
  title: string;
  image: string;
  color: string;
  Content: FC<ProjectContentProps>;
  index: number;
}

const ProjectBox: FC<ProjectBoxProps> = ({
  index,
  title,
  image,
  color,
  Content,
}) => {
  const isFirst: boolean = index > 0;
  const isLast: boolean = index < projectData.length - 1;

  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      layout // Ensures smooth animations during reorder
      dragElastic={0.2} // Adds natural resistance
      onHoverStart={() => {
        setIsDragging(true);
      }} // Mark as dragging when it starts
      onLayoutAnimationComplete={() => {
        setIsDragging(false);
      }} // Reset after dragging ends
      onHoverEnd={() => {
        setIsDragging(false);
      }} // Reset after dragging ends
      whileHover={{
        marginTop: isFirst && isDragging ? 32 : 0,
        marginBottom: isLast && isDragging ? 32 : 0,
      }} // Disable hover effect when dragging
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative p-6 text-center dark-glass border-2 pb-16 cursor-grab active:cursor-grabbing"
      style={{
        borderColor: color,
        borderTopLeftRadius: !isFirst ? 8 : 0,
        borderTopRightRadius: !isFirst ? 8 : 0,
        borderBottomLeftRadius: !isLast ? 8 : 0,
        borderBottomRightRadius: !isLast ? 8 : 0,
      }}
    >
      {/* Logo Container */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-12 flex items-center justify-center shadow-md border-2"
        style={{
          width: 96,
          height: 96,
          borderRadius: "48px",
          borderColor: color,
        }}
      >
        <Image
          src={image}
          alt={`${title} logo`}
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>

      {/* Box Content */}
      <div className="mt-8 text-gray-100">
        <h3 className="text-2xl font-semibold" style={{ color }}>
          {title}
        </h3>
        <Content color={color} />
      </div>

      {/* Semi-Circular Cutout */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-gray-800"
        style={{
          width: 98,
          height: 48,
          borderRadius: "48px 48px 0 0",
          borderTop: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
          bottom: "-2px",
        }}
      />
    </motion.div>
  );
};

export default ProjectBox;
