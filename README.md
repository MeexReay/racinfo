# 🍵 Racinfo

An unofficial webpage with information about Real Address Chat protocol made with Next.js.
This is a personal project and is not affiliated with the original Real Address Chat developer.

[Live in production website](https://racinfo.meex.lol)

## Features

- List of client, server and development tools for Real Address Chat.
- Comprehensive documentation of the Real Address Chat protocol and its successors.
- List of known User Agents with their regular expressions and colors.
- Packed with modern and sleek design, looks great on mobile devices.

## Host your Racinfo

It is strongly recommended to use Docker to host Racinfo. You can use the following command to run it:

```bash
docker build -t racinfo .
docker run -d -p 8085:8085 racinfo
```

By default, Racinfo runs on port 8085. You can change this by using the -p flag with the docker run command, like this:

```bash
# Instead of 8085, you can use any port you want, like 3000
docker run -d -p 3000:8085 racinfo
```

But if you don't want to use Docker, you can run it with local Node.js installation:

```bash
corepack enable pnpm && corepack install -g pnpm@latest
pnpm install 
pnpm build

# Replace 8085 with the port that you want to use
pnpm start --port 8085
```

## Contributing

If you are a developer of a client/server/tool for RAC, you can add it to Racinfo by making a pull request.
You can also contribute by improving the documentation or fixing bugs.
