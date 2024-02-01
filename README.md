# GitHub labels batch

## Getting Started

### Environment variables

First, you'll need a [GitHub token](https://github.com/settings/tokens) to access your repositories through an API.

Then, rename the `.env.example` file to `.env` and add your token to the `GH_TOKEN` variable.

You also have to fill the variables `GH_OWNER` and `GH_REPOSITORY` with the repository that you want to add.

### Adding labels

You can write the labels that you want to add on the `labels.json` file, following the structure:

```json
{
  "name": "bug",
  "color": "d73a4a",
  "description": "Something isn't working"
}
```

On the `/examples` directory you may find some label examples that I use on my projects, feel free to use them.


## Running the project

This project uses Bun, check the installation guide [here](https://bun.sh/docs/installation).

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```