async def text_chunker(chunks):
    """Yield complete sentences from streamed text input."""
    sentence_endings = (".", "?", "!")
    buffer = ""

    async for text in chunks:
        message = text.choices[0].delta.content
        if message == None:
            yield None
        buffer += message

        # Find the last occurrence of any sentence-ending punctuation in the buffer
        last_punct = max(buffer.rfind(punct) for punct in sentence_endings)

        if last_punct != -1:
            # If there is sentence-ending punctuation, split at the last punctuation
            sentence = buffer[: last_punct + 1]  # Include the punctuation in the output
            yield sentence
            buffer = buffer[
                last_punct + 1 :
            ].strip()  # Save what's after the punctuation into the buffer

    # If there's any remaining text in the buffer after the loop, yield it
    if buffer:
        yield buffer
