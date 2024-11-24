'use client';

import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from '@/actions';

interface SnippetEditFormProps{
  snippet:Snippet
}
export default function SnippetEditForm({snippet}:SnippetEditFormProps){
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value:string='') => {
    setCode(value);
  }
  const editSnippetAction = actions.editSnippet.bind(null,snippet.id,code);
  return (
    <div>
      <Editor height='40vh' theme="vs-dark" language="javascript" defaultValue={snippet.code} onChange={handleEditorChange}/>
      <form action={editSnippetAction}>
        <button className="p-2 rounded border" type="submit">Save</button>
      </form>
    </div>
  )
}