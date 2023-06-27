const { OpenAIApi } = require('openai')

// Configuration for OpenAI
const configuration = {
  organization: 'org-y0vIHonZMz14MkjwPTUH55wD',
  apiKey: process.env.OPENAI_API_KEY,
}

// Initialize OpenAI API
const openai = new OpenAIApi(configuration)

// Function to generate response from OpenAI
async function generateResponse(question) {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: question,
      max_tokens: 1000,
      temperature: 0.8,
    })

    return response.data.choices[0].text
  } catch (error) {
    console.error(error)
    throw new Error('Error generating response from OpenAI.')
  }
}

// Export the generateResponse function
module.exports = { generateResponse }
