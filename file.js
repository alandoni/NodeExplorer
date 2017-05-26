module.exports = class File {
	constructor(path, name, size, type, modified, created, isFile) {
		this.path = path;
		this.name = name;
		this.size = size;
		this.type = type;
		this.modified = modified;
		this.created = created;
		this.isFile = isFile;
	}
}