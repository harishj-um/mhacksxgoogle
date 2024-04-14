def file_to_string(file_path):
    """
    Reads the entire content of a file specified by the file_path
    and returns it as a string.

    Args:
    file_path (str): The path to the text file.

    Returns:
    str: The content of the file as a string.
    """
    with open(file_path, 'r') as file:
        content = file.read()
    return content
