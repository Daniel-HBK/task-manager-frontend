import React from "react";
import { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Done":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pending":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "Done":
        return "✓";
      case "In Progress":
        return "⟳";
      case "Pending":
        return "○";
      default:
        return "○";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2">
          {task.title}
        </h3>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            task.status
          )}`}
        >
          <span className="mr-1">{getStatusIcon(task.status)}</span>
          {task.status}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {task.description}
      </p>
    </div>
  );
};

export default TaskCard;
