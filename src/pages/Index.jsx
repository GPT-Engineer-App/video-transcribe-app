import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Text, Textarea, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

// This is a simulated transcription result.
const simulatedTranscription = `Hello! How can I assist you today?
> I'm looking for information on my order status.
Sure, can you provide your order ID?
> Yes, it's #12345.
Thank you. I see that your order is in transit and will be delivered tomorrow.`;

const Index = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const toast = useToast();

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setVideoFile(file);
      // Simulate the video processing and OCR by setting a timeout
      setTimeout(() => {
        setTranscription(simulatedTranscription);
        toast({
          title: "Transcription Complete",
          description: "The text has been successfully extracted from the video.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }, 3000); // Simulate a processing time
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Chatbot Interaction Transcriber
        </Heading>
        <Text>Upload a video of your chatbot interaction to transcribe the text.</Text>
        <Box>
          <Input type="file" accept="video/*" onChange={handleUpload} display="none" id="file-upload" />
          <Button leftIcon={<FaUpload />} as="label" htmlFor="file-upload">
            Upload Video
          </Button>
        </Box>
        {videoFile && (
          <Box>
            <Heading as="h2" size="md">
              Uploaded Video:
            </Heading>
            <Text>{videoFile.name}</Text>
          </Box>
        )}
        <Box w="full">
          <Heading as="h2" size="md">
            Transcription:
          </Heading>
          <Textarea value={transcription} isReadOnly placeholder="The transcribed text will appear here..." />
        </Box>
        {transcription && <Image src="https://images.unsplash.com/photo-1659482633392-bba525b5c6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJhY3Rpb258ZW58MHx8fHwxNzA4OTUyNzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" />}
      </VStack>
    </Container>
  );
};

export default Index;
