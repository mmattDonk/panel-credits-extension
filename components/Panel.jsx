import { Container, Group, Avatar, Image, Text } from "@mantine/core";
import { marked } from "marked";

export default function PanelComponent(panel) {
  const localeDateString = new Date(panel.createdAt).toLocaleDateString();
  const localeTimeString = new Date(panel.createdAt).toLocaleTimeString();

  return (
    <div>
      <br />
      <Container
        size={320}
        py="xs"
        px="xs"
        pb="xs"
        pt="xs"
        style={{
          backgroundColor: "#212326",
          borderRadius: "1rem",
        }}
      >
        {panel.image !== "" ?? panel.image !== undefined ? (
          <>  
            <a href={panel.link}>
                <Image
                  src={panel.image}
                  alt={panel.title}
                />
            </a>
            <br />
          </>
        ) : (
          <Text size="xs">No image provided</Text>
        )}

        <h1>{panel.title}</h1>

        <hr />

          <div
            dangerouslySetInnerHTML={{ __html: marked(panel.markdown || "") }}
          />
        <br />

        <Group>
          <Text size="sm">Panel by:</Text>
          <Avatar
            src={panel.chatter.profilePicture}
            alt={panel.chatter.displayName + "'s profile image."}
            size="sm"
            radius="xl"
          />
          <div>
            <Text size="sm">{panel.chatter.displayName}</Text>
          </div>
        </Group>

        <Text size="sm">
          Created: {localeDateString} - {localeTimeString}
        </Text>
      </Container>
    </div>
  );
}
