require 'redmine'

Redmine::Plugin.register :redmine_select2 do
  name 'BE4 Select2 Plugin'
  author 'Mario Vicidomini'
  description 'Replace Select Tag with Select2'
  version '1.0.1'
  url 'https://github.com/mavi82/RedmineSelect2.git'
  author_url 'https://github.com/mavi82'
end

class ReactSelectPluginViewListener < Redmine::Hook::ViewListener

  # Adds javascript and stylesheet tags
  def view_layouts_base_html_head(context)
      javascript_include_tag('select2-4.1.0-rc.0/js/select2.js', :plugin => :redmine_select2) +
      javascript_include_tag('main.js', :plugin => :redmine_select2) +
      stylesheet_link_tag('select2-4.1.0-rc.0/css/select2.css', :plugin => :redmine_select2)
  end
  
end