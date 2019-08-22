#!/bin/bash

if [ "$RUN_UPLOADS_DURING_RELEASE" == "true" ]; then
  echo "Running Release Tasks"
  
  rake deploy:upload_to_s3
  rake deploy:clear_cache
  
  echo "Done running release-tasks.sh"
fi 