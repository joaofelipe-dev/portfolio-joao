"use client";
import ContributionGraph from "@raulcanodev/react-github-dots";

export default function GitHubStats() {
  return (
    <div className="mb-4">
      <ContributionGraph
        username="joaofelipe-dev"
        token={process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}
        theme="dark"
        cacheTime="1d"
      />
    </div>
  );
}