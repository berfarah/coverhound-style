# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "rubocop-config-coverhound"
  spec.version       = "2.0"
  spec.authors       = ["Bernardo Farah"]
  spec.email         = ["ber@bernardo.me"]
  spec.licenses      = ["MIT"]

  spec.summary       = "CoverHound style guides and shared style configs."
  spec.homepage      = "https://github.com/coverhound/coverhound-style"
  spec.files         = Dir["README.md", "default.yml"]

  spec.add_dependency "rubocop", "~> 0.56.0"
  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
end
