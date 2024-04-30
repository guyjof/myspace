import { User } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export function ProfileForm({ user }: { user: User }) {

  async function updateUser(formData: FormData) {
    "use server";
    const session = await getServerSession(authOptions)
    const currentUserEmail = session?.user?.email!;

    const updatedData = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: Number(formData.get('age')),
      image: formData.get('image'),
    };

    const user = await prisma.user.update({
      where: {
        email: currentUserEmail,
      },
      data: updatedData as any,
    });
    redirect(`/users/${user?.id}`)
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form action={updateUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={user?.image ?? ''} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
