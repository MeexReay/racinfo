import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Title from "@/components/blocks/Title";
import InlineCode from "@/components/blocks/InlineCode";

export default function Projects() {
  const clients: ProjectProps[] = [
    {
      name: "bRAC",
      authorId: "MeexReay",
      projectGit: "https://github.com/MeexReay/bRAC",
      description: "Better RAC client. (gtk4)",
      tags: ["Active", "WRAC", "RAC", "v2", "TLS"],
    },
    {
      name: "crack",
      authorId: "kiber_ogur4ik",
      projectGit: "https://gitlab.com/kiber_ogur4ik/crack",
      description:
        "Cool RAC klient for Web, Android and iOS. (web-app)",
      tags: ["Active", "WRAC", "RAC", "v2", "v1.0", "TLS"],
    },
    {
      name: "Tower",
      authorId: "kostya-zero",
      projectGit: "https://github.com/kostya-zero/tower",
      description: "A modern desktop client for RAC protocol built with Tauri. (web-app)",
      tags: ["Active", "WRAC", "RAC", "v2", "TLS"],
    },
    {
      name: "Snowdrop",
      authorId: "Forbirdden",
      projectGit: "https://github.com/Forbirdden/Snowdrop",
      description: "The best (w)RAC-based messenger. (web-app)",
      tags: ["Active", "WRAC", "RAC", "v2"],
    },
    {
      name: "clRAC",
      externalDownload: true,
      authorId: "sugoma",
      externalLink: "https://wdfiles.ru/1u74v",
      projectGit: "",
      description: "The official RAC client. (cli)",
      tags: ["Unknown", "RAC", "v2"],
    },
    {
      name: "Mefedroniy",
      authorId: "OctoBanon-Main",
      projectGit: "https://github.com/OctoBanon-Main/mefedroniy-client",
      description: "TUI client for Real Address Chat protocol.",
      tags: ["Abandoned", "RAC", "v1.99.2"],
    },
    {
      name: "cRACk",
      authorId: "pansangg",
      projectGit: "https://github.com/pansangg/cRACk",
      description: "TUI RAC client on Python.",
      tags: ["Abandoned", "RAC", "v2"],
    },
    {
      name: "CRAB",
      authorId: "pixtated",
      projectGit: "https://gitea.bedohswe.eu.org/pixtaded/crab",
      description: "Crimean RAC Bundle. (cli)",
      tags: ["Abandoned", "RAC", "v1.99.2"],
    },
    {
      name: "dobroho_vechora",
      authorId: "bedohswe",
      projectGit: "https://gitea.bedohswe.eu.org/bedohswe/dobroho_vechora",
      description: "RAC client made with Bash script. (cli)",
      tags: ["Abandoned", "RAC", "v1.0"],
    },
  ];

  const servers: ProjectProps[] = [
    {
      name: "sRAC",
      authorId: "MeexReay",
      projectGit: "https://github.com/MeexReay/sRAC",
      description: "Simple RAC server.",
      tags: ["Active", "WRAC", "RAC", "v2", "TLS"],
    },
    {
      name: "lRACd",
      authorId: "sugoma",
      externalDownload: true,
      externalLink: "https://wdfiles.ru/2Q2ee",
      projectGit: "",
      description: "The official implementation of RAC server.",
      tags: ["Unknown", "RAC", "v2"],
    },
    {
      name: "CRAB",
      authorId: "pixtated",
      projectGit: "https://gitea.bedohswe.eu.org/pixtaded/crab",
      description: "Crimean RAC Bundle ",
      tags: ["Abandoned", "RAC", "v1.99.2"],
    },
    {
      name: "AlmatyD",
      authorId: "bedohswe",
      projectGit: "https://gitea.bedohswe.eu.org/bedohswe/almatyd",
      description: "Open source server for Sugoma's RAC protocol ",
      tags: ["Abandoned", "RAC", "v1.0"],
    },
  ];

  const tools: ProjectProps[] = [
    {
      name: "rac-rs",
      authorId: "kostya-zero",
      projectGit: "https://github.com/kostya-zero/rac-rs",
      description: "A Rust client library for RAC protocol.",
      tags: ["Active", "Client", "WRAC", "RAC", "v2", "TLS"],
    }
  ];

  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <PageTitle id={"projects"}>Projects</PageTitle>
      <Text>
        This is a curated list of projects that is related to RAC protocol.
        There is a client and server implementations of RAC. Note that some
        projects are not available on Git services and should be downloaded from
        external sources. They are marked with
        <InlineCode>external@</InlineCode> text at the beginning of the author
        ID. If you want to add your project to this list, please make an issue
        on our GitHub repository.
      </Text>
      <Title id={"clients"}>Clients</Title>
      <Text>
        Here is a grid of all available client for RAC protocol with their
        respective repository link.
      </Text>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-full"}>
        {clients.map((client) => (
          <ProjectCard
            key={client.name}
            name={client.name}
            externalDownload={client.externalDownload || undefined}
            externalLink={client.externalLink || undefined}
            authorId={client.authorId}
            projectGit={client.projectGit}
            description={client.description}
            tags={client.tags}
          />
        ))}
      </div>
      <Title id={"servers"}>Servers</Title>
      <Text>
        And here are the servers implementation! You can choose whatever you
        want and setup your own RAC server.
      </Text>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-full"}>
        {servers.map((server) => (
          <ProjectCard
            key={server.name}
            name={server.name}
            externalDownload={server.externalDownload}
            externalLink={server.externalLink}
            authorId={server.authorId}
            projectGit={server.projectGit}
            description={server.description}
            tags={server.tags}
          />
        ))}
      </div>
      <Title id={"servers"}>Tools</Title>
      <Text>
        You can use these tools for your projects! Don&apos;t be shy!
      </Text>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-full"}>
        {tools.map((tool) => (
          <ProjectCard
            key={tool.name}
            name={tool.name}
            externalDownload={tool.externalDownload}
            externalLink={tool.externalLink}
            authorId={tool.authorId}
            projectGit={tool.projectGit}
            description={tool.description}
            tags={tool.tags}
          />
        ))}
      </div>
    </main>
  );
}
