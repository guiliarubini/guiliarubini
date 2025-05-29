import pydantic

class Resume(SQLModel, table=True):
    id: int = Field(default=None, nullable=False, primary_key=True)
    name: str = Field()
    surname: str
    title: str
    degree: str
    phone:str
    