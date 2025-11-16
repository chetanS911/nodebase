import { resolve } from 'path';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {
      return prisma.workflow.findMany();
    }),
    createWorkflow: protectedProcedure.mutation(async () => {
      await  inngest.send({
        name: "text/hello.world",
        data: {
          email: "chetan@gmail.com",
        },
      });

      return { success: true, message: "Job queued"}
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;