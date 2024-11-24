export default function SnippetNotFound(){
  return <div>Something wrong!</div>
}

//THis component is shown as content on page when notFound() is called. Its name is fixed and it is the designated error file for each page.tsx and applies to same folder and children folder.
//Alsso the name of the folder this file has, is dynamic as [id], so whenever path is like snippets/1, page.tsx will render where 1 is id param.