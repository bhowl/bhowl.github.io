#!/bin/bash
# Bookmarks:
# https://info.orcid.org/documentation/api-tutorials/api-tutorial-read-data-on-a-record/#h-get-an-access-token
# https://github.com/ORCID/ORCID-Source/blob/main/docs/public_api/public_api_quick_start.md
# https://iphylo.blogspot.com/2020/01/orcid-serves-schemaorg-linked-data-via.html

# Imports:
path_to_dir="$LOOP/scripts/stable/utils_sh"
. "$path_to_dir/func.sh" || exit 1

# Main:
check_path_exists "logs" || exit 1
date=$(date +%Y_%m_%d)
output="logs/${date}_orcid.xml"
curl_cmd="curl -H 'Accept: application/xml' https://pub.orcid.org/v3.0/0000-0002-8651-754X > $output"

echo -ne "Do you want to run:\n$curl_cmd\n"
continue_prompt || exit 0

eval $curl_cmd

check_file_exists "$output"
if (( $? == 0 )); then
	echo "Saved to $output" && exit 0
else
	error "Failed"
fi
