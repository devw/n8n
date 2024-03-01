#!/bin/bash

# Check if there are any arguments
if [ $# -eq 0 ]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

# Initialize the JSON array
echo "["

# Read each line from the input file
while IFS= read -r line; do
    # Append comma if this is not the first line
    if [ "$first" != true ]; then
        echo ","
    fi

    # Output the JSON object
    echo "$line"

    # Set first flag to false after first iteration
    first=false
done < "$1"

# Close the JSON array
echo "]"
