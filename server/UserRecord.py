from datetime import date

class UserRecord:

    def __init__(self, lang: str):
        self.lang = lang
        self.date = date.today().strftime("%d/%m/%Y")

    def __repr__(self) -> str:
        return str(self.__dict__)