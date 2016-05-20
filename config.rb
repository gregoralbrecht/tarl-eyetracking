###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

###
# General configuration
###

Time.zone = "Berlin"

# Use kramdown as markdown engine for fenced code blocks
require 'kramdown'
activate :syntax, :line_numbers => true
set :markdown_engine, :kramdown

# # We need this to deploy on github pages
# set :site_url, ""

activate :blog do |blog|
  blog.name = "code"
  blog.prefix = "code"
  blog.permalink = "{title}.html"
  blog.sources = "{title}.html"
  blog.layout = "code_layout"
end

###
# Development configuration
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
  activate :directory_indexes
end

###
# Helpers
###

###
# Build-specific configuration
###

configure :build do

  # We need relative links for gh pages
  set :http_prefix, '/tarl-eyetracking'
  set :relative_links, true
  # activate :relative_assets

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Hash assets for cache busting
  activate :asset_hash

  # Use pretty permalinks
  activate :directory_indexes

end

