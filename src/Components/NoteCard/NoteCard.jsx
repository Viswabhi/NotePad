import React from "react";

export default function NoteCard({
  title,
  setCurrentEditing,
  index,
  deleteNote,
  isSelected,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        backgroundColor: isSelected ? "#62A5EB" : "",
        cursor: "pointer",
      }}
      onClick={() => setCurrentEditing(index)}
    >
      <h2 style={{ flex: 1 }}>{title.substr(0, 20)}....</h2>
      <button
        style={{
          width: "25px",
          height: "25px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          deleteNote(index);
        }}
      >
        -
      </button>
    </div>
  );
}
