import React, { FC } from "react";
// @ts-ignore
import { CKEditor } from "@ckeditor/ckeditor5-react";
// @ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./content.scss";

interface ContentProps {
  title: string;
  data: string;
}

const Content: FC<ContentProps> = (props) => {
  const { title, data } = props;
  return (
    <div className="content-detail mt-4">
      <p className="content-title mb-1">{title}</p>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
};

export default Content;
