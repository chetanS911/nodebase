import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const page = async () => {
  const users = await prisma.user.findMany();

   return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button variant="outline">
        Click Me 
      </Button>
    </div>
   );
};

export default page;