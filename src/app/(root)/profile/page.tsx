import { redirect } from 'next/navigation';
import { prisma } from '../../../../prisma/prisma-client';
import { ProfileUI } from '@/components/profile';
import { getUserSession } from '@/lib/get-user-session';

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/');
  }

  const user = await prisma.user.findFirst({ where: { id: session?.id } });

  if (!user) {
    return redirect('/');
  }

  return <ProfileUI data={user} />;
}