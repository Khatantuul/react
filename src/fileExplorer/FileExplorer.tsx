type File = {
    id: number,
    name: string,
    folder: File[]
}

function FileExplorer({ files }) {
    return (
      <div className="file-explorer">
        <ul>
          {files.map(item => {
            if (item.type === 'folder') {
              return (
                <li key={item.id} className="folder">
                  <span className="folder-name">{item.name}</span>
                  <ul>
                    {item.children.map(child => {
                      if (child.type === 'folder') {
                        return (
                          <li key={child.id} className="folder">
                            <span className="folder-name">{child.name}</span>
                            <ul>
                              {child.children.map(grandchild => {
                                if (grandchild.type === 'folder') {
                                  return (
                                    <li key={grandchild.id} className="folder">
                                      <span className="folder-name">{grandchild.name}</span>
                                      <ul>
                                        {/* Could continue nesting... */}
                                      </ul>
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={grandchild.id} className="file">
                                      <span className="file-name">{grandchild.name}</span>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li key={child.id} className="file">
                            <span className="file-name">{child.name}</span>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={item.id} className="file">
                  <span className="file-name">{item.name}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }