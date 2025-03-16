require 'redmine'

Redmine::Plugin.register :redmine_selectize do
  name 'BE4 Selectize Plugin'
  author 'Mario Vicidomini'
  description 'Replace Select Tag with selectize.js'
  version '1.0.1'
  url 'https://github.com/mavi82/RedmineSelectize.git'
  author_url 'https://github.com/mavi82'
end

class ReactSelectPluginViewListener < Redmine::Hook::ViewListener

  # Adds javascript and stylesheet tags
  def view_layouts_base_html_head(context)
      javascript_include_tag('selectize.js', :plugin => :redmine_selectize) +
      javascript_include_tag('main.js', :plugin => :redmine_selectize) +
      stylesheet_link_tag('selectize.bootstrap4.css', :plugin => :redmine_selectize)
  end
  
end