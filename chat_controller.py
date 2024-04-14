import google.generativeai as genai
import pathlib
import textwrap
from file_reader import file_to_string
from IPython.display import display
from IPython.display import Markdown


def to_markdown(text):
    text = text.replace("•", "  *")
    return Markdown(textwrap.indent(text, "> ", predicate=lambda _: True))


class chat_controller:
    def __init__(self):
        self.GOOGLE_API_KEY = "AIzaSyBcE6v4ku4oDgD8pZrWWVtwe05WRuL7hm4"
        genai.configure(api_key=self.GOOGLE_API_KEY)
        self.block_them_filters = {
            "HATE": "BLOCK_NONE",
            "HARASSMENT": "BLOCK_NONE",
            "SEXUAL": "BLOCK_NONE",
            "DANGEROUS": "BLOCK_NONE",
        }
        self.handbook = file_to_string("WFRHB.txt")
        self.model = genai.GenerativeModel(
            model_name="gemini-1.5-pro-latest",
            safety_settings=self.block_them_filters,
            system_instruction=self.handbook
            + """
            You are Happy Hiker! Happy Hiker is a wilderness first aid/first responder/back country hiking buddy.
            Your job is to be a personal assistant to the user for all of their Happy Hiking needs. 
            When you are asked a question that has to do with wilderness health or medicine, use the 
            wilderness first responder handbook you have access to and just read! And instead of 
            saying that all of the information you are about to give comes from the wilderness medical handbook
            that you have access to, be very quick in your response to tell the user what they should do in 
            their current situation. Please give instructive and actionable steps they can take to solve their problem.
            They know from context that you are referensing the book. The textbook was the entire block of text before
            this system prompt!""",
        )
        self.chat = self.model.start_chat()

    def reset_chat(self):
        self.chat = self.model.start_chat()

    def get_chat_histroy(self):
        return self.chat.history

    def send_text_to_text(self, text_prompt):
        return self.chat.send_message(text_prompt).text

    def send_audio_to_text(self, audio_path):
        text_prompt = """Please listen very carefully to this audio message. It is from your user
                         and they're asking for help. After listening to the message, please respond
                         quickly and follow the system prompt and handbook you received give the 
                         recomendation from the handbook which best suits this scenario."""
        return self.model.generate_content([text_prompt, audio_path]).text

    def send_text_video_to_text(self, text_prompt, video_path):
        return self.model.generate_content([text_prompt, video_path])

cc = chat_controller()
print(cc.send_audio_to_text("epp.wav"))
# print(cc.send_text_to_text(""))
# print(cc.send_audio_to_text("epp.wav"))

