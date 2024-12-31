import { Octokit } from "@octokit/core";

// * reading labels from labels.json
const file = Bun.file("labels.json");
const labels = await file.json();

// * creating octokit instance
const octokit = new Octokit({
	auth: Bun.env.GH_TOKEN,
});

async function removeLabels(name: string) {
	await octokit.request("DELETE /repos/{owner}/{repo}/labels/{name}", {
		owner: Bun.env.GH_OWNER || "",
		repo: Bun.env.GH_REPO || "",
		name,
		headers: {
			"X-GitHub-Api-Version": Bun.env.X_GITHUB_API_VERSOIN,
		},
	});
}

// * loop through labels and create them one by one
for (const label of labels) {
	await removeLabels(label.name)
		.then(() => {
			console.log(`Label ${label.name} created!`);
		})
		.catch((err) => {
			console.log(err);
		});
}
