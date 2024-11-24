'use server';
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id:number, code:string){
  await db.snippet.update({
    where:{id},
    data:{code}
  })
  revalidatePath(`/snippets/${id}`);

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id:number){
  await db.snippet.delete(
    {
      where:{id}
    }
  )
  revalidatePath('/');
  redirect(`/`);
}

export async function createSnippet(formState:{message:string},formData: FormData){
  const title = formData.get('title');
  const code = formData.get('code');
  const snippet = await db.snippet.create({
    data:{
      title,
      code, 
    },
  });
  revalidatePath('/');

  redirect('/');//redirecting to homepage with url '/'
}