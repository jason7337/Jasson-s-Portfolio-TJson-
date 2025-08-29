# Nix configuration for Replit environment
# This file specifies the dependencies and environment needed to run the portfolio project

{ pkgs }: {
  deps = [
    # Node.js runtime and package manager
    pkgs.nodejs-18_x
    pkgs.nodePackages.npm
    
    # Development tools
    pkgs.nodePackages.typescript
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.eslint
    
    # Build tools required for native dependencies
    pkgs.python3
    pkgs.gcc
    pkgs.gnumake
    pkgs.libuv
    pkgs.pkg-config
    
    # Additional utilities
    pkgs.git
    pkgs.curl
    pkgs.which
  ];
  
  # Environment variables for Node.js
  env = {
    PATH = "$REPL_HOME/node_modules/.bin:$PATH";
    NODE_ENV = "development";
  };
}