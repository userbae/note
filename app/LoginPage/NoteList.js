"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NoteList(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/Note/list")
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);
  return (
    <div>
      {data.length > 0
        ? data.map((a, i) => {
            return (
              <div key={i}>
                <Link prefetch={false} href={`detail/${a._id}`}>
                  <span>⚫</span>
                  <p>{a.title}</p>
                </Link>

                <button
                  onClick={() => {
                    fetch("/api/post/delete", {
                      method: "DELETE",
                      body: a._id,
                    });
                  }}
                >
                  삭제하기
                </button>
              </div>
            );
          })
        : "Note 없음"}
    </div>
  );
}
