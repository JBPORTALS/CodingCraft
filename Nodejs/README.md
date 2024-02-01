## Getting Started

<!--- Please follow the instructions below and provide as much useful information as possible. -->

### ORM' Setup

1. Create Supabase account if you have not.
2. Create New Project and store the db password somewhere safely. Otherwise you can go with existing supabase project.
3. Go to supabase settings and database section, copy connection string.
4. Create new file name of `.env` and add this variable
   `DATABASE_URL = YOUR_CONNNECTION_STRING]`
5. Initialize Prisma
   `npx prisma init`
6. Get Into `schema.prisma` file. Edit or add new models.
7. Push the schma changes to actual DB
   `npx prisma db push`
   This command will push all your schema changes as well as creates prisma client library with updated types version.
