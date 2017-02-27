# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

task 'before' do
  puts "#" * 90
  puts "debugging webpack:"
  puts

  dist_dir = Rails.application.config.x.webpacker[:packs_dist_dir]
  result   = `WEBPACK_DIST_DIR=#{dist_dir} NODE_ENV=production ./bin/webpack --json`
  puts result
  puts "#" * 90
end

task 'webpacker:compile' => :before
