# Basic svelte app with Supabase _(Optional)_

Template app tech-stack:

- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) - Schema validation
- [Superforms](https://superforms.rocks/) - Form validation
- [Supabase](https://supabase.com/docs) - Backend - DB

some links:
<!-- - https://www.youtube.com/watch?v=ujbE0mzX-CU -->
- <https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html>
- <https://www.youtube.com/watch?v=oH_-6TyxVhI&t=2s>

---

## Step 01 - Supabase Local Development

[Local Development | Supabase Docs](https://supabase.com/docs/guides/getting-started/local-development)

1. instal Subabase as Dev dependency

```bash
pnpm i supabase -D
```

1. Initialize a new Supabase project to set up the configuration for developing your project locally

```bash
pnpx supabase init
```

This will create a new folder `supabase` in our project with 3 basic files
`gitignore`, `config.toml` and `seed.sql`

We need to set some settings for our project as we do in cloud Supabase project dashboard settings. Things like site URL, auth providers and settings.

```toml
# set url and redirect to vite port 5173
site_url = "http://localhost:5173"
additional_redirect_urls = ["https://localhost:5173"]

# for development 
# we keep email confirmation set to false
enable_confirmations = false

```

3. **Start Docker** and **make sure there is no other image running** othervise next command will nor succesfuly finish image creation.
You may need to close app _(if was already open)_ and after running docker again stop button become active and will stop image running. When ther is no runing Docker image, follow to next step.

4. Start Supabase
 This command may take a while to run if this is the first time using the CLI.

```bash
pnpx supabase start
```

The **start** command uses Docker to start the Supabase **services**.

5.When start is finished we will se in console following data

```bash
  API URL: http://localhost:54321
  GraphQL URL: http://localhost:54321/graphql/v1
  DB URL: postgresql://postgres:postgres@localhost:54322/postgres
  Studio URL: http://localhost:54323
  Inbucket URL: http://localhost:54324
  JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
  
  anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0

service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU

```

if you have by any chance miss you can get these by command

```bash
pnpx supabase status
```

These data will be used in our `.env` file. To get these data in `.env` format use command.

```bash
pnpx supabase status -o env
```

and we get back in console this

```bash
ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
API_URL="http://localhost:54321"
DB_URL="postgresql://postgres:postgres@localhost:54322/postgres"
GRAPHQL_URL="http://localhost:54321/graphql/v1"
INBUCKET_URL="http://localhost:54324"
JWT_SECRET="super-secret-jwt-token-with-at-least-32-characters-long"
SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU"
STUDIO_URL="http://localhost:54323"
```

6. create `.env` file and paste these in. We may no need all of these so you may keep only you need. For a basic setup we keep these.

```bash
ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
API_URL="http://localhost:54321"
DB_URL="postgresql://postgres:postgres@localhost:54322/postgres"
SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU"
```

To make it work with Supabase we will rename these

```bash
# ANON_KEY
PUBLIC_SUPABASE_ANON_KEY=""

# API_URL
PUBLIC_SUPABASE_URL=""

# DB_URL
SUPABASE_DB_URL=""

# SERVICE_ROLE_KEY
SUPABASE_SERVICE_ROLE_KEY=""

# create a new that will be postgress for this dev instance 
SUPABASE_DB_PASSWORD="postgress"
```

### Stop Supabase in Docker

To **stop** all Supabase services **without reseting local database** use command

```bash
pnpx supabase stop --backup
```

To stop all Supabase services and **reset database** use command

```bash
pnpx supabase stop
```

Next Step can be using `dotenv` library to handle our Environment variables differently (more secure)

---

## Step 02 - Use `dotenv`

1. install `dotenv`

```bash
pnpm i dotenv
```

2. Create a `env.ts`
Inside `lib` directory create folder `server` and inside `env.ts` file

3. place this code in to this file

```js
import * as dotenv from "dotenv";
dotenv.config();

function getEnvironmentVariable(environmentVariable: string): string {
  const validEnvironmentVariable = process.env[environmentVariable];
  if (!validEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  }
  return validEnvironmentVariable;
}

export const ENV = {
  PUBLIC_SUPABASE_ANON_KEY: getEnvironmentVariable("PUBLIC_SUPABASE_ANON_KEY"),
  PUBLIC_SUPABASE_URL: getEnvironmentVariable("PUBLIC_SUPABASE_URL"),
  SUPABASE_SERVICE_ROLE_KEY: getEnvironmentVariable("SUPABASE_SERVICE_ROLE_KEY"),
  SUPABASE_DB_URL: getEnvironmentVariable("SUPABASE_DB_URL"),
};

```

The function **getEnvironmentVariable** that will take string of env variable as parameter we would like to access.

- Function will try to get value of variable
- if it fails it will **throw an Error**
- if success it will return **value of env variable**

the object `ENV` will be able to access the variables and a throw an error it they do not exist. This approach will **stop the build** if we would not have all `env` variables we need.

As it is in **server directory** it will **never be bundled to client side code** mean that **client** will never have access to `ENV` object

## Step 03 Migration

use `supabase migration` to create a table


```bash
pnpx supabase migration new profiles
```
this will create a file `xxxxx_profiles.sql` in `supabase/migrations` directory. in this file we can write our migration SQL code to create a table

```sql
create table public.profiles(
  id uuid unique references auth.users on delete cascade,
  full_name text,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  primary key (id)
);
```

[more info about  ](https://supabase.com/docs/guides/auth/managing-user-data)