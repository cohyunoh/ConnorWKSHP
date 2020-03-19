#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/movie/")
sys.path.insert(0,"/var/www/movie/movie/")

import logging
logging.basicConfig(stream=sys.stderr)

from movie import app as application
