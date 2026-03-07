export async function handler(event) {

  try {

    const response = await fetch(
      "https://unsparse-sherman-nonfallaciously.ngrok-free.dev/webhook/f020f006-eb25-4c31-9bbc-a5714df33af5",
      {
        method: "POST",
        body: event.body,
        headers: {
          "Content-Type": "application/octet-stream"
        }
      }
    );

    const data = await response.text();

    return {
      statusCode: 200,
      body: data
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: "Server error"
    };

  }

}
