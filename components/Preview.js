import styled from "./preview.module.css";

export default function Preview({ content }) {
  return (
    <div
      className={styled.pre}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
