#!/usr/bin/bash

echo "Removing old files"
rm -rf public

echo "Copying new files"
cp -r packages/client/build public