-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here

local opt = vim.opt

opt.shiftwidth = 4
opt.tabstop = 4
opt.scrolloff = 10
opt.colorcolumn = "80"
opt.inccommand = "split"
opt.incsearch = true
opt.jumpoptions = "stack,view"
opt.foldlevel = 99
opt.foldmethod = "indent"
opt.hidden = true
opt.cmdheight = 0