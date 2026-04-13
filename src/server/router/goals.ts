import { router, protectedProcedure } from "@/server/trpc";
import {
  sleepEntrySchema,
  sleepEntryUpdateSchema,
  paginatedDateRangeSchema,
  idSchema,
  goalSchema,
} from "@/lib/validators";
import { goalEntries } from "@/server/db/schema";
import { eq, and, gte, lte } from "drizzle-orm";

export const goalsRouter = router({
    create: protectedProcedure
        .input(goalSchema)
        .mutation(async ({ input, ctx }) => {
        const [entry] = await ctx.db
            .insert(goalEntries)
            .values({
                userId: ctx.user.id,
                goalDesc: input.goalDesc,
                points: input.points
            })
            .returning();
        return entry;
        }),

    list: protectedProcedure
        .query(async ({ ctx }) => {

        return ctx.db
            .select()
            .from(goalEntries)
            .where(eq(goalEntries.userId, ctx.user.id))
    })
})