import json

# Define the path to the JSON file
file_path = '2024_05_17_citations.json'

try:
    # Step 1: Load the JSON data
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Step 2: Extract and sort the entries by year
    entries = data.get('entries', {})
    sorted_entries = sorted(entries.values(), key=lambda x: x.get('year', 0), reverse=True)

    # Step 3: Format the entries
    formatted_entries = []
    for entry in sorted_entries:
        first_author = entry.get('author', [''])[0]  # Get the first author, or an empty string if no author is found
        entry_str = (
            f"{entry.get('year')}. {first_author}. {entry.get('title')}. {entry.get('publisher', '')}.\n"
            # f"Volume: {entry.get('volume', '')}\n"
            # f"Number: {entry.get('number', '')}\n"
            # f"Pages: {entry.get('pages', '')}\n"
        )
        formatted_entries.append(entry_str)

    # Step 4: Write to a text file
    with open('sorted_citations.txt', 'w') as output_file:
        for entry in formatted_entries:
            output_file.write(entry + "\n")

    print("The entries have been printed to sorted_citations.txt")

except FileNotFoundError:
    print(f"Error: The file {file_path} was not found.")
except json.JSONDecodeError:
    print(f"Error: The file {file_path} does not contain valid JSON.")
