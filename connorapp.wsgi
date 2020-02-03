#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/connorapp/")
sys.path.insert(0,"/var/www/connorapp/connorapp/")

import logging
logging.basicConfig(stream=sys.stderr)

from connorapp import app as application
